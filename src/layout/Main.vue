<template>
  <main class="main py-5">
    <Suspense>
      <RouterView v-slot="{ Component }">
        <KeepAlive include="Dev">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>

      <template #fallback> 正在加载... </template>
    </Suspense>
  </main>
</template>

<style lang="scss" scoped></style>
