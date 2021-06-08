export const getAllUsers = (state) => {
    return state.usersPage.users;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount =(state)=>{
    return state.usersPage.totalUsersCount
}
export const getUserPage =(state)=>{
    return state.usersPage.currentPage
}
export const getFetching=(state)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress
}
