<script setup>
import { usePageScroll } from '@uni-helper/uni-use'

console.log(usePageScroll)
</script>

<template>
  <view us-flex="~ col items-center justify-center" us-p-50px>
    <Logos />
    <InputEntry />
  </view>
</template>

<route lang="yaml" type="home">
style:
  navigationBarTitleText: 首页
</route>
