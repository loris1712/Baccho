<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="target"
    :aria-controls="target"
    :aria-expanded="toggled"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      description: "Button target element",
    },
    toggled: {
      type: Boolean,
      default: false,
      description: "Whether button is toggled",
    },
  },
};
</script>
<style>
.navbar-dark .navbar-toggler {
  background: #b00a92;
  border-radius: 25rem;
  margin-top: 1rem;
  margin-left: auto;
}
</style>
