<template>
  <div class="footer">
    <div class="container">
      <MainSocial />
      <div class="footer-content">
        <div class="footer-section">
          <h4>SITENAME</h4>
        </div>
        <br>
        <div class="footer-body">
          <div 
            v-for="option in options"
            :key="option.id"
            class="footer-menu">
            <h5>{{ option.title }}</h5>
            <ul>
              <li
                v-for="item in option.items"
                :key="item.id">
                <nuxt-link 
                  v-if="(item.path != null)"
                  :to="item.path">
                  <fa
                    v-if="(item.icon != null)"
                    :icon="item.icon"/>
                  {{ item.title }}
                </nuxt-link>
                <a 
                  v-else
                  :to="item.url">
                  <fa
                    v-if="(item.icon != null)"
                    :icon="item.icon"/>
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <MainFooterBar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: 'options',
          title: 'Company',
          items: [
            {
              id: 'items-id',
              title: 'Blog',
              path: '/blog',
              icon: 'newspaper'
            },
            {
              id: 'about',
              title: 'About',
              path: '/about',
              icon: 'medal'
            },
            {
              id: 'contact',
              title: 'Contact',
              path: '/contact',
              icon: 'address-book'
            },
            {
              id: 'tutorial',
              title: 'Tutorial',
              path: '/tutorial',
              icon: 'chalkboard'
            }
          ]
        },
        {
          id: 'tpr',
          title: '  ',
          items: [
            {
              id: 'terms',
              title: 'Terms of Services',
              path: '/tos',
              icon: null
            },
            {
              id: 'privacy',
              title: 'Privacy police',
              path: '/privacy',
              icon: null 
            }
          ]
        },
        {
          id: 'enlaces-externos',
          title: 'Enlaces',
          items: [
            {
              id: 'otro-blog',
              title: 'Mi otro blog',
              path: null,
              url: '',
              icon: null
            }
          ]
        }
      ]
    }
  }
}
</script>