<template>
    <div class='error-404'>
        <div class="error-status">
            404
        </div>
        <p class="error-text">
            页面找不到喽~~~
        </p>
    </div>
</template>
<script>
export default {
    name:'E404',
}
</script>
<style lang="less" scope>
    .error-404 {
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .error-status{
            font-size: 150px;
            color:#dadada;
        }
    }
</style>