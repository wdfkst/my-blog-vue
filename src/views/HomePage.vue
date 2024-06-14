<template>
  <div >
    <!-- 内容上层部分 -->
    <el-container class="container">
      <div class="carousel">
        <!-- 走马灯轮播 -->
        <div class="left">
          <el-carousel class="el_carousels" :interval="5000">
            <el-carousel-item style="height: 400px;" v-for="item in images" :key="item">
              <el-image :src="item" />
              <h3 class="carousel-caption">哥们，看不懂啊</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 个人介绍 -->
        <div class="right">
          <el-card class="introduce_card" shadow="always">

            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-text class="mx-1" size="large">尼干嘛哈哈哎呦</el-text>
            <el-divider>
              联系我
            </el-divider>
            <div class="introduce_icon">
              <el-image :src="require('@/assets/img/github.png')" />
              <el-image :src="require('@/assets/img/wechat.png')" />
            </div>
          </el-card>

        </div>

      </div>
      <!-- 文章信息 -->
      <div class="content">
        <!--左侧 文章列表 -->
        <div class="cards">
          <el-card v-for="(article, index) in articles" :key="index" class="list_card" shadow="hover">
            <!--文章列表标题内容-->
            <div class="article">
              <div class="article-d1">
                <h3>{{ article.title }}</h3>
                <span>{{ article.content }}</span>
              </div>
              <div class="image-container">
                <img :src="article.image" />
              </div>
            </div>

            <!--文章作者 点赞收藏浏览数-->
            <div class="article2">
              <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <span>{{ article.author }}</span>
              <div class="flex gap-2">
                <el-tag v-for="(tag, i) in article.tags" :key="i" :type="tag.type" size="small">{{ tag.name }}</el-tag>
              </div>
              <div class="articleOhter">
                <span class="item">
                  <i class="el-icon-view"></i>
                  <span class="name">阅读</span>{{ article.views }}
                </span>
                <span class="item">
                  <i class="el-icon-chat-dot-round"></i>
                  <span class="name">评论</span>{{ article.comments }}
                </span>
                <span class="item">
                  <i class="el-icon-thumb"></i>
                  <span class="name">赞</span>{{ article.likes }}
                </span>
                <span class="item">
                  <i class="el-icon-time"></i>
                  <span class="name"></span>{{ article.date }}
                </span>
              </div>
            </div>
          </el-card>

        </div>
        <div class="cards2">

          <el-card class="list_card2" shadow="hover">
            <div class="div1">
              <img :src="require('@/assets/img/type.png')" />
              <span>博客信息</span>
            </div>
            <div class="div2">
              <ul>
                <li><img :src="require('@/assets/img/article.png')" />文章数目</li>
                <li><img :src="require('@/assets/img/ps.png')" />评论数量</li>
                <li><img :src="require('@/assets/img/ps.png')" />运行时常</li>
                <li><img :src="require('@/assets/img/ps.png')" />访客人数</li>
              </ul>
            </div>
          </el-card>
        </div>

      </div>
      <div class="footer-page">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </el-container>
  </div>
</template>

<script >
export default {
  name: 'HomePage',
  data() {
    return {
      images: [require('@/assets/code.jpg'), require('@/assets/code.jpg'), require('@/assets/code.jpg')],
      url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      articles: [
        {
          title: '多看一眼就会爆炸，再看一眼就会融化',
          content: '多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化',
          image: require('@/assets/code.jpg'),
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          author: '蔡旭坤',
          tags: [
            { name: 'Tag 1', type: 'primary' },
            { name: 'Tag 2', type: 'success' },
            { name: 'Tag 3', type: 'info' },
            { name: 'Tag 4', type: 'warning' },
            { name: 'Tag 5', type: 'danger' },
          ],
          views: 1,
          comments: 2,
          likes: 5,
          date: '2020-02-16'
        },
        {
          title: '多看一眼就会爆炸，再看一眼就会融化',
          content: '多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化',
          image: require('@/assets/code.jpg'),
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          author: '蔡旭坤',
          tags: [
            { name: 'Tag 1', type: 'primary' },
            { name: 'Tag 2', type: 'success' },
            { name: 'Tag 3', type: 'info' },
            { name: 'Tag 4', type: 'warning' },
            { name: 'Tag 5', type: 'danger' },
          ],
          views: 1,
          comments: 2,
          likes: 5,
          date: '2020-02-16'
        },
        {
          title: '多看一眼就会爆炸，再看一眼就会融化',
          content: '多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化',
          image: require('@/assets/code.jpg'),
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          author: '蔡旭坤',
          tags: [
            { name: 'Tag 1', type: 'primary' },
            { name: 'Tag 2', type: 'success' },
            { name: 'Tag 3', type: 'info' },
            { name: 'Tag 4', type: 'warning' },
            { name: 'Tag 5', type: 'danger' },
          ],
          views: 1,
          comments: 2,
          likes: 5,
          date: '2020-02-16'
        },
        {
          title: '多看一眼就会爆炸，再看一眼就会融化',
          content: '多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化多看一眼就会爆炸，再看一眼就会融化',
          image: require('@/assets/code.jpg'),
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          author: '蔡旭坤',
          tags: [
            { name: 'Tag 1', type: 'primary' },
            { name: 'Tag 2', type: 'success' },
            { name: 'Tag 3', type: 'info' },
            { name: 'Tag 4', type: 'warning' },
            { name: 'Tag 5', type: 'danger' },
          ],
          views: 1,
          comments: 2,
          likes: 5,
          date: '2020-02-16'
        }
        // Add more articles as needed
      ],
    };
  },
};

</script>
<style lang="scss"  scoped>
.container {
  display: flex;
  /* 垂直分布 */
  flex-direction: column;
}

.carousel {
  display: flex;
  width: 100%;
  height: 450px;
  margin-top: 60px;
}

.introduce_icon {

  display: block;
  margin: 0 20px;

}



.left {
  width: 800px;
  margin-left: 50px;
}

.introduce_card {
  height: 400px;
  background-image: -moz-linear-gradient(180deg, rgb(153, 209, 255), rgb(251, 255, 199));

  background-image: -webkit-linear-gradient(180deg, rgb(153, 209, 255), rgb(251, 255, 199));

  background-image: linear-gradient(180deg, rgb(153, 209, 255), rgb(251, 255, 199), transparent 65%);
}

.el_carousels {
  height: 400px;
  border-radius: 5px;
}

.mx-1 {
  display: flex;
  justify-content: center;
  margin-top: 5px;

}


.carousel-caption {
  width: 100%;
  height: 50px;
  background-color: rgba(206, 193, 193, 0.5);
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: aliceblue;
  z-index: 10;
  margin: 0;
  /* 确保没有额外的边距 */
  display: flex;
  align-items: center;
  justify-content: center;
}


.avatar {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  text-align: center;
}

.right {
  width: 300px;
  margin-left: 20px;
}

.content {
  display: flex;
  width: 100%;
  // height: 1000px;

}

.cards {
  width: 780px;
  margin-left: 50px;
  height: 100%;
}

.article {
  width: 100%;
  height: 100px;
  display: flex;
  margin: 0;
}

.article div:nth-of-type(2) {
  display: flex;
  width: 180px;

  img {
    width: 100%;
    border-radius: 5px;
  }
}


.image-container {
  width: 200px; /* 设置容器宽度 */
  overflow: hidden; /* 隐藏超出容器部分的图片 */
    border-radius: 5px;
}
.image-container img {
  width: 100%; /* 图片初始大小 */
  transition: transform 0.3s ease; /* 平滑变化 */

}
 
.image-container:hover img {
  transform: scale(1.2); /* 鼠标悬停时放大1.2倍 */

}
.article2 {
  width: 100%;
  display: flex;
  margin-top: 10px;
  height: 60px;
  align-items: center;

  .avatar {
    height: 50px;
    width: 50px;
    margin: 0px;
  }

  span {
    margin-left: 10px;
  }
}

.articleOhter {
  margin-left: 10px;
  font-size: 0.8rem;
  color: var(--text-color);

  .item {
    margin-right: 1px;

    .name {
      margin-right: 3px;
    }


    i {
      margin-right: 3px;
    }
  }
}

.article-d1 {
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin: 0;

  span {
    width: 550px;
    font-size: 14px;
    color: #9a9ca0;
    font-weight: lighter;
  }

  h3 {
    margin: 0px;
  }
}

.cards2 {
  width: 300px;
  margin-left: 10px;
  background-color: cadetblue;
  height: 700px;
}

.list_card {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  /* 设置下方间距为30px */
}

.list_card2 {
  height: 400px;
  display: flex;

  .div1 {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;

  }

  .div2 {
    ul {
      list-style-type: none;
      /* 可以设置为 circle, square, none 等 */
      margin: 10px;
      /* 整个列表的外边距 */
      padding: 0;
      /* 整个列表的内边距 */
    }

    li {
      display: flex;
      align-items: center;
      width:240px;
      margin-bottom: 20px;
      /* 每个列表项的下边距 */
      padding: 5px;
      /* 每个列表项的内边距 */
      background-color: #f0f0f0;
      /* 背景颜色 */
    }
  }
}

.footer-page {
  display: flex;
  width: 100%;
  height: 100px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}</style>