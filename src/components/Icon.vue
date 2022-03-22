<template>
  <div
    class="icon icon-shape"
    :class="[
      size && `icon-${size}`,
      type && `icon-shape-${type}`,
      gradient && `bg-gradient-${gradient}`,
      shadow && 'shadow',
      rounded && 'rounded-circle',
      color && `text-${color}`,
    ]"
  >
    <slot>
      <i :class="name"></i>
    </slot>
  </div>
</template>
<script>
export default {
  name: "icon",
  props: {
    name: {
      type: String,
      default: "",
      description: "Icon name",
    },
    size: {
      type: String,
      default: "",
      description: "Icon size",
    },
    type: {
      type: String,
      default: "",
      description: "Icon type (primary, warning etc)",
    },
    gradient: {
      type: String,
      default: "",
      description: "Icon gradient type (primary, warning etc)",
    },
    color: {
      type: String,
      default: "",
      description: "Icon color (primary, warning etc)",
    },
    shadow: {
      type: Boolean,
      default: false,
      description: "Whether icon has shadow",
    },
    rounded: {
      type: Boolean,
      default: false,
      description: "Whether icon is rounded",
    },
  },
};
</script>

<style scoped>
.icon-shape {
  color: #b00a92;
}
.icon-shape-success {
  color: #b00a92;
  background-color: rgb(218 84 194 / 50%);
}
</style>
