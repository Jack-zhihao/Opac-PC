<template>
  <div @click="handleClick" class="cell__btn">取消预借</div>
</template>

<script>
export default {
  props: ["row", "col"],
  methods: {
    handleClick() {
      this.$emit("handle-click", this.row);
    }
  }
};
</script>

<style lang="less" scoped>
.cell__btn {
  line-height: 1;
  display: inline-block;
  border-radius: 11px;
  padding: 5px 9px;
  color: #fff;
  background: #e05858;
  cursor: pointer;
}
</style>
