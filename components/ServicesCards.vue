<template>
  <div class="services-cards">
    <NuxtLink
      v-for="(card, i) in cards"
      :key="i"
      :to="card.to"
      class="services-cards__card"
    >
      <h4 class="services-cards__title">{{ card.title }}</h4>

      <svg-icon
        v-if="card.icon"
        class="services-cards__svg"
        :name="card.icon"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ServicesCards',
  props: {
    cards: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.services-cards {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 4rem;

  @include --tablet {
    column-gap: 2rem;
    row-gap: 2rem;
  }

  &__card {
    position: relative;
    padding: 3.2rem;
    width: calc(100% / 3 - 2.7rem);
    min-height: 17.6rem;
    background-color: var(--element-background);
    border-radius: $borderRadiusDefault;
    transition: background-color $trTime $easeDefault, box-shadow $trTime $easeDefault;
    overflow: hidden;

    @include hover {
      background-color: var(--app-background);
      box-shadow: 0 2px 8px rgba(95, 126, 155, 0.18);

      .services-cards__title {
        color: var(--primary-color);
      }

      .services-cards__svg {
        transform: scale(1.2);
      }
    }

    @include --tablet {
      padding: 2rem;
      width: calc(100% / 2 - 1rem);
      min-height: 12rem;
    }

    @include --mobile {
      width: 100%;
      min-height: 9rem;
    }
  }

  &__title {
    width: 70%;
    transition: color $trTime $easeDefault;
  }

  &__svg {
    position: absolute;
    right: 0rem;
    bottom: -0.5rem;
    width: 13rem;
    height: 65%;
    color: var(--primary-color);
    transition: color $trTime $easeDefault, transform $trTime $easeDefault;

    @include --tablet {
      bottom: -1rem;
      right: -1rem;
      width: 11rem;
      height: 70%;
    }

    @include --mobile {
      bottom: -1rem;
      right: -2rem;
      width: 12rem;
      height: 90%;
    }
  }
}
</style>
