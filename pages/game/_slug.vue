<template>
  <div>
    <h1>Slug: {{ slug }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    // @todo: fetch data
    // eslint-disable-next-line no-console
    await console.log(params)
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  }
}
</script>
