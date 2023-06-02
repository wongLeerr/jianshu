import { fromJS } from "immutable"
// import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "社会热点",
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
        },
        {
            id: 2,
            title: "科技新闻",
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
        },
        {
            id: 3,
            title: "运动健身",
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
        },
    ],
    articleList: [
        {
            id: 1,
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            header: "心灵的安宁",
            content: "很有意思，这么多年，我最喜欢的绘画作品，居然只有两幅。 一个是很多年前我们家老茶几的开门上，玻璃彩绘，湖水氤氲，渔歌唱晚，小桥流水人家，牧童短笛..."
        },
        {
            id: 2,
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            header: "逆旅",
            content: "苏子曰：“人生如逆旅，我亦是行人。”在这纷纷扰扰的行路者队伍中，你曾云游何方，又曾以何处为逆旅。关于那个暂时的栖息之所，很多人是无法选择的，而在..."
        },
        {
            id: 3,
            imgUrl: "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            header: "唐伯虎的笔墨自由和色彩明快在他的绘画作品中表现得如何？",
            content: "唐伯虎的笔墨自由和色彩明快在他的绘画作品中表现得如何？ 唐伯虎的笔墨自由和色彩明快在他的绘画作品中表现得非常突出，是他绘画风格的重要特点之一。 ..."
        }
    ],
    recommendList: [
        {
            "id": 1,
            "imgUrl": "http://www.jianshu.com/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
        },
        {
            "id": 2,
            "imgUrl": "http://www.jianshu.com/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        },
        {
            "id": 3,
            "imgUrl": "http://www.jianshu.com/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        },
        {
            "id": 4,
            "imgUrl": "http://www.jianshu.com/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        }
    ],
})

const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {

        default:
            return state;
    }
}

export default reducer