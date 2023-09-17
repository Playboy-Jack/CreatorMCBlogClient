import service from "../utils/request";

/**
 * 获取文章评论列表
 * @param {*} articleId 文章id
 * @param {*} pageNum 第几页
 * @param {*} pageSize 一页几条记录
 * @returns 
 */
export function commentList(articleId, pageNum, pageSize) {
  return service.get(`/comment/commentList/${articleId}/${pageNum}/${pageSize}`);
}

/**
 * 添加评论
 * @param {*} data 
 * @returns 
 */
export function addComment(data) {
  return service.post("/comment", data, {
    headers: {
      "token": localStorage.getItem("token")
    }
  });
}