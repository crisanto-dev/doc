<template>
  <div class="social">
    <ul>
      <li 
        v-for="network in networks"
        :key="network.id">
        <a :href="`${network.url}`" exact target="_blank" :alt="network.title">
         <fa-layers class="fa-2x">
           <fa :icon="['fab', `${network.icon}`]"  />
         </fa-layers>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      networks: [
        {
          id:"facebook-crisanto-dev",
          title: "Facebook",
          url: "https://facebook.com",
          icon: "facebook"
        },
        {
          id:"instagram-crisanto-dev",
          title: "Instagram",
          url: "https://instagram.com",
          icon: "instagram"
        }
      ]
    }
  },
  mounted(){
  }
}
</script>