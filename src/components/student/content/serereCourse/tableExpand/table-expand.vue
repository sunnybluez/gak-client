<template>
  <div>
    <Row class="expand-row">
      <Col span="13">
        <span class="expand-key">课程描述: </span>
        <span class="expand-value">{{ row.description }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "table-expand",
      props: {
        row: Object
      }
    }
</script>

<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>
