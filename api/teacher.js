import request from '@/utils/request'

export default {
    //分页讲师查询的方法
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'post'
        })
    }
}