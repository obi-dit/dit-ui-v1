<template>
  <div class="w-full component unlogged bg-primary">
    <MainNavbar class="sticky z-50 bg-primary top-0" />
    <slot />
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.component.unlogged {
}
</style>
