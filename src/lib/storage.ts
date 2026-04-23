// 学习进度类型定义
export interface ProjectProgress {
  code: string; // 用户编写的代码
  completed: boolean; // 是否完成
  lastUpdated: number; // 最后更新时间
}

// 聊天记录类型定义
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

// 存储单个项目进度
export const saveProjectProgress = (projectId: string, progress: Omit<ProjectProgress, 'lastUpdated'>) => {
  const allProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
  allProgress[projectId] = {
    ...progress,
    lastUpdated: Date.now()
  };
  localStorage.setItem('learningProgress', JSON.stringify(allProgress));
};

// 获取单个项目进度
export const getProjectProgress = (projectId: string): ProjectProgress => {
  const allProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
  return allProgress[projectId] || { code: '', completed: false, lastUpdated: 0 };
};

// 获取所有项目进度
export const getAllProgress = (): Record<string, ProjectProgress> => {
  return JSON.parse(localStorage.getItem('learningProgress') || '{}');
};

// 存储聊天记录
export const saveChatMessages = (projectId: string, messages: ChatMessage[]) => {
  const allChats = JSON.parse(localStorage.getItem('chatMessages') || '{}');
  allChats[projectId] = messages;
  localStorage.setItem('chatMessages', JSON.stringify(allChats));
};

// 获取聊天记录
export const getChatMessages = (projectId: string): ChatMessage[] => {
  const allChats = JSON.parse(localStorage.getItem('chatMessages') || '{}');
  return allChats[projectId] || [];
};

// 清除所有数据（用于测试或重置）
export const clearAllData = () => {
  localStorage.removeItem('learningProgress');
  localStorage.removeItem('chatMessages');
};

// 导出所有数据（用于备份）
export const exportAllData = (): string => {
  const data = {
    learningProgress: getAllProgress(),
    chatMessages: JSON.parse(localStorage.getItem('chatMessages') || '{}')
  };
  return JSON.stringify(data, null, 2);
};

// 导入数据（用于恢复）
export const importAllData = (jsonData: string) => {
  try {
    const data = JSON.parse(jsonData);
    if (data.learningProgress) {
      localStorage.setItem('learningProgress', JSON.stringify(data.learningProgress));
    }
    if (data.chatMessages) {
      localStorage.setItem('chatMessages', JSON.stringify(data.chatMessages));
    }
    return true;
  } catch (error) {
    console.error('数据导入失败:', error);
    return false;
  }
};
