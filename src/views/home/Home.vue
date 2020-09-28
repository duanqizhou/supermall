<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="search-box">
        <div class="header-search">
          <i class="header-icon"></i>
          <input type="text" placeholder="电脑主机">
        </div>
      </div>
    </nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>

<script>
  //导入接口
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './ChildHome/HomeSwiper';
  import {
    getBanner
  } from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
      }
    },
    created() {
      // 获取数据
      getBanner().then(res => {
        this.banners = res.data.bannerInfo
      })
    },
  }

</script>

<style lang="scss" scoped>
  .home-nav {
    background-color: var(--color-tint);

    .search-box {
      position: relative;
      height: 44px;
      margin-top: 7px;

      .header-icon {
        width: 24px;
        background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=) no-repeat;
        background-position: -80px 0;
        background-size: 200px;
        margin: 8px 0 0 15px;
      }

      .header-search {
        display: flex;
        width: 100%;
        border: none;
        border-radius: 15px;
        height: 30px;
        overflow: hidden;
        background: #f7f7f7;
        font-size: 12px;
        -webkit-box-align: center;
        line-height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 35px;
        padding-right: 10px;
        box-sizing: border-box;

        input {
          border: 0;
          outline: none;
          font-size: 12px;
          color: #232326;
          padding-left: 5px;
          box-sizing: border-box;
          -webkit-box-flex: 1;
          height: auto;
          margin: 0 0 0 5px;
          vertical-align: middle;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          line-height: 16px;
        }
      }
    }
  }

</style>
