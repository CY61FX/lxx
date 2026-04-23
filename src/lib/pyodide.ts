import { loadPyodide } from 'pyodide';

// 全局Pyodide实例
let pyodide: any = null;

// 初始化Pyodide，预装所需库
export async function initPyodide() {
  if (pyodide) return pyodide;
  
  try {
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'
    });
    
    // 预装核心库
    await pyodide.loadPackage([
      'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit-learn', 'mlxtend'
    ]);
    
    // 配置matplotlib，使其在前端渲染
    pyodide.runPython(`
      import matplotlib.pyplot as plt
      plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']
      plt.ioff()
    `);
    
    return pyodide;
  } catch (error) {
    console.error('Pyodide初始化失败:', error);
    throw error;
  }
}

// 运行Python代码
export async function runPythonCode(code: string) {
  const py = await initPyodide();
  
  try {
    const result = await py.runPythonAsync(code);
    return { success: true, result };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// 生成数据集
export async function generateDataset(datasetType: string, params: any = {}) {
  const py = await initPyodide();
  
  try {
    let datasetCode = '';
    
    switch (datasetType) {
      case 'sales':
        datasetCode = `
import pandas as pd
import numpy as np
import datetime

# 生成销售数据
np.random.seed(42)
dates = pd.date_range('2023-01-01', '2023-12-31', freq='D')
product_categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Food']

# 生成随机销售数据
data = []
for date in dates:
    for category in product_categories:
        sales = np.random.randint(100, 1000)
        revenue = sales * np.random.uniform(10, 100)
        data.append({
            'date': date.strftime('%Y-%m-%d'),
            'category': category,
            'sales': sales,
            'revenue': round(revenue, 2)
        })

# 创建DataFrame
df = pd.DataFrame(data)
print(df.to_json(orient='records'))
`;
        break;
        
      case 'customer':
        datasetCode = `
import pandas as pd
import numpy as np

# 生成客户数据
np.random.seed(42)

n_customers = 1000
ages = np.random.randint(18, 70, n_customers)
genders = np.random.choice(['Male', 'Female'], n_customers)
locations = np.random.choice(['North', 'South', 'East', 'West'], n_customers)
purchase_amounts = np.random.uniform(10, 1000, n_customers)
purchase_frequency = np.random.randint(1, 20, n_customers)

# 创建DataFrame
df = pd.DataFrame({
    'customer_id': range(1, n_customers + 1),
    'age': ages,
    'gender': genders,
    'location': locations,
    'purchase_amount': np.round(purchase_amounts, 2),
    'purchase_frequency': purchase_frequency
})

print(df.to_json(orient='records'))
`;
        break;
        
      case 'stock':
        datasetCode = `
import pandas as pd
import numpy as np

# 生成股票数据
np.random.seed(42)
dates = pd.date_range('2023-01-01', '2023-12-31', freq='B')

# 生成随机股票价格
initial_price = 100
prices = [initial_price]
for i in range(1, len(dates)):
    change = np.random.normal(0, 2)
    new_price = max(prices[-1] + change, 10)
    prices.append(new_price)

# 创建DataFrame
df = pd.DataFrame({
    'date': dates.strftime('%Y-%m-%d'),
    'price': np.round(prices, 2),
    'volume': np.random.randint(1000, 10000, len(dates))
})

print(df.to_json(orient='records'))
`;
        break;
        
      default:
        throw new Error('不支持的数据集类型');
    }
    
    const result = await py.runPythonAsync(datasetCode);
    return JSON.parse(result);
  } catch (error: any) {
    console.error('数据集生成失败:', error);
    throw error;
  }
}
