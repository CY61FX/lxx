import { useState } from 'react';
import { Brain, AlertTriangle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const Guide = () => {
  const [activeTab, setActiveTab] = useState('models');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    model1: true,
    model2: false,
    model3: false,
    controversy1: false,
    controversy2: false,
    controversy3: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">学习引导</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          第一天：底层认知 — 建立正确的数据分析思维框架，了解行业争议和常见误区
        </p>

        {/* 标签页导航 */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('models')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'models' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>思维模型</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('controversies')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'controversies' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>行业争议</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'questions' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>辨析题</span>
              </div>
            </button>
          </div>
        </div>

        {/* 思维模型 */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('model1')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">1. 数据分析的本质</h3>
                {expandedSections.model1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.model1 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>数据分析的本质是通过对数据的收集、处理、分析和解释，为决策提供依据。它不是简单的统计计算，而是一个系统性的过程，包括：</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>明确问题和目标</li>
                    <li>数据收集和预处理</li>
                    <li>探索性数据分析</li>
                    <li>模型构建和验证</li>
                    <li>结果解释和可视化</li>
                    <li>决策建议和实施</li>
                  </ul>
                  <p>记住：数据分析的价值在于为决策服务，而不是为了分析而分析。</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('model2')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">2. 数据质量的重要性</h3>
                {expandedSections.model2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.model2 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>"垃圾进，垃圾出"（Garbage In, Garbage Out）是数据分析的基本原则。数据质量直接决定了分析结果的可靠性和价值。</p>
                  <h4 className="font-semibold">数据质量的维度包括：</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>准确性：数据是否反映真实情况</li>
                    <li>完整性：数据是否完整，无缺失值</li>
                    <li>一致性：数据是否在不同系统中保持一致</li>
                    <li>时效性：数据是否及时更新</li>
                    <li>可靠性：数据来源是否可信</li>
                  </ul>
                  <p>在开始分析前，花时间清洗和验证数据是非常必要的。</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('model3')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">3. 统计思维与业务思维</h3>
                {expandedSections.model3 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.model3 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>优秀的数据分析师需要同时具备统计思维和业务思维：</p>
                  <h4 className="font-semibold">统计思维：</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>理解概率和统计显著性</li>
                    <li>掌握假设检验和置信区间</li>
                    <li>识别数据中的模式和异常</li>
                    <li>避免常见的统计谬误</li>
                  </ul>
                  <h4 className="font-semibold">业务思维：</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>理解业务目标和KPI</li>
                    <li>将数据分析与业务决策联系起来</li>
                    <li>考虑数据背后的业务逻辑</li>
                    <li>用业务语言解释分析结果</li>
                  </ul>
                  <p>平衡这两种思维是成为优秀数据分析师的关键。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 行业争议 */}
        {activeTab === 'controversies' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('controversy1')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">1. 数据驱动 vs 经验驱动</h3>
                {expandedSections.controversy1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.controversy1 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>争议：数据分析是否应该完全取代经验判断？</p>
                  <h4 className="font-semibold">正方观点：</h4>
                  <p>数据是客观的，基于数据的决策更可靠，减少人为偏见和错误。</p>
                  <h4 className="font-semibold">反方观点：</h4>
                  <p>数据可能存在偏差，且无法捕捉所有复杂的业务场景，经验仍然重要。</p>
                  <h4 className="font-semibold">平衡观点：</h4>
                  <p>最佳实践是将数据驱动和经验驱动相结合。用数据验证经验，用经验解释数据异常。</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('controversy2')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">2. 复杂模型 vs 简单模型</h3>
                {expandedSections.controversy2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.controversy2 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>争议：是否越复杂的模型越好？</p>
                  <h4 className="font-semibold">正方观点：</h4>
                  <p>复杂模型（如深度学习）能够捕捉更复杂的模式，提高预测准确性。</p>
                  <h4 className="font-semibold">反方观点：</h4>
                  <p>简单模型更易于解释和维护，过度复杂的模型可能导致过拟合。</p>
                  <h4 className="font-semibold">平衡观点：</h4>
                  <p>根据问题复杂度选择合适的模型。在准确性和可解释性之间找到平衡。</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <button
                onClick={() => toggleSection('controversy3')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold">3. 相关性 vs 因果关系</h3>
                {expandedSections.controversy3 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.controversy3 && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>争议：数据分析是否能证明因果关系？</p>
                  <h4 className="font-semibold">常见误区：</h4>
                  <p>将相关性误认为因果关系，导致错误的决策。</p>
                  <h4 className="font-semibold">正确理解：</h4>
                  <p>相关性只是因果关系的必要条件，而非充分条件。要证明因果关系，需要设计对照实验或使用更复杂的因果推断方法。</p>
                  <h4 className="font-semibold">实践建议：</h4>
                  <p>在分析报告中明确区分相关性和因果关系，避免过度解读数据。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 辨析题 */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">1. 以下关于数据分析的说法，正确的是：</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="radio" id="q1a" name="q1" className="mr-2" />
                  <label htmlFor="q1a">A. 数据分析的目的是找到数据中的模式</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1b" name="q1" className="mr-2" />
                  <label htmlFor="q1b">B. 数据分析的目的是为决策提供依据</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1c" name="q1" className="mr-2" />
                  <label htmlFor="q1c">C. 数据分析的目的是证明预设的假设</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1d" name="q1" className="mr-2" />
                  <label htmlFor="q1d">D. 数据分析的目的是使用复杂的统计模型</label>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">正确答案：B</p>
                <p className="mt-2 text-gray-600">数据分析的最终目的是为决策提供依据，而不仅仅是找到模式或使用复杂模型。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">2. 关于数据质量，以下说法错误的是：</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="radio" id="q2a" name="q2" className="mr-2" />
                  <label htmlFor="q2a">A. 数据质量包括准确性、完整性、一致性等维度</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2b" name="q2" className="mr-2" />
                  <label htmlFor="q2b">B. 数据清洗是保证数据质量的重要步骤</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2c" name="q2" className="mr-2" />
                  <label htmlFor="q2c">C. 缺失值必须全部删除</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2d" name="q2" className="mr-2" />
                  <label htmlFor="q2d">D. 数据质量直接影响分析结果的可靠性</label>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">正确答案：C</p>
                <p className="mt-2 text-gray-600">缺失值不一定需要全部删除，可以根据具体情况选择填充、插值或其他处理方法。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">3. 关于相关性和因果关系，以下说法正确的是：</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="radio" id="q3a" name="q3" className="mr-2" />
                  <label htmlFor="q3a">A. 相关性必然意味着因果关系</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q3b" name="q3" className="mr-2" />
                  <label htmlFor="q3b">B. 因果关系必然意味着相关性</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q3c" name="q3" className="mr-2" />
                  <label htmlFor="q3c">C. 相关性和因果关系是同一概念</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q3d" name="q3" className="mr-2" />
                  <label htmlFor="q3d">D. 相关性和因果关系毫无关系</label>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">正确答案：B</p>
                <p className="mt-2 text-gray-600">因果关系必然意味着相关性，但相关性不一定意味着因果关系。</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guide;
