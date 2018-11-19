<template>
  <div @click="handleClick" class="cell__btn" :class="{'active': row.status === 1}">续借</div>
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
  cursor: no-drop;
  background: #8f8f8f;
  &.active {
    background: #0074d9;
    cursor: pointer;
  }
}
</style>
