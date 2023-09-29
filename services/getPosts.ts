import URLS from '@/constants/URLS';
import { dynamicQuery, query } from './DynamicQueryService';

export interface IGetCoursesParams {
  mode?: 'ForStaticProps' | 'ForStaticPaths';
  categoryId: string | number;
  groupId?: string | number;
  includeBody?: boolean;
  pageSize?: number;
  currentPageIndex?: number;
}
export const getPosts = ({ mode = 'ForStaticProps', categoryId, groupId, pageSize = 1000, currentPageIndex = 1, includeBody = false }: IGetCoursesParams) => {
  let sqlCommand = 'p_CMS_Item_NEXTJS_GetItemsByCategoryID';
  const parameters: any = { categoryId, pageSize, currentPageIndex };

  if (mode === 'ForStaticPaths') {
    sqlCommand = 'p_CMS_Item_NEXTJS_ForStaticPaths_GetItemsByCategoryID_GroupID';
    parameters.groupId = groupId;

    return query({
      sqlCommand,
      parameters,
    });
  }

  // Mode = ForStaticProps
  parameters.includeBody = includeBody;

  if (groupId) {
    sqlCommand = 'p_CMS_Item_NEXTJS_GetItemsByCategoryID_GroupID';
    parameters.groupId = groupId;
  }

  return query({
    sqlCommand,
    parameters,
  });
};

// ------------------------------------------------------------------------------------------------
/** Lấy danh sách bài viết theo FriendlyUrl */
export const getPostsByFriendlyUrl = (friendlyUrl: string) => {
  return dynamicQuery({
    moduleName: 'CMS',
    subModuleName: '',
    entityName: 'Items',
    entityType: 't',
    fields: 'id, title, subTitle, imagePath, createdDate, categoryID, friendlyUrl, notes, body',
    parameters: {
      moduleID: URLS.moduleID,
      friendlyUrl: friendlyUrl,
      status: 'PUBLISHED',
      // tags: 'next.js',
    },
    limit: 1,
    sort: 'ID DESC',
  });
};

/** Lấy danh sách bài viết theo category */
export const getPostsByCategories = (categoryId: string) => {
  return dynamicQuery({
    moduleName: 'CMS',
    subModuleName: '',
    entityName: 'Items',
    entityType: 't',
    fields: 'id, title,subTitle, imagePath, friendlyUrl, displayType, createdDate , categoryID, body',
    parameters: {
      moduleID: URLS.moduleID,
      categoryID: categoryId,
      status: 'PUBLISHED',
    },
    limit: 100,
    sort: 'ID DESC',
  });
};
export const getPostsByPostId = (id: number) => {
  return dynamicQuery({
    moduleName: 'CMS',
    subModuleName: '',
    entityName: 'Items',
    entityType: 't',
    fields: 'id, title, subTitle, imagePath, createdDate, categoryID, friendlyUrl, notes, body',
    parameters: {
      moduleID: URLS.moduleID,
      id: id,
      status: 'PUBLISHED',
      // tags: 'next.js',
    },
    limit: 1,
    sort: 'ID DESC',
  });
};
