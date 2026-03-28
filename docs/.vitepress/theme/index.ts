import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Handle logo clicks to navigate to marketing site
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const logoLinks = document.querySelectorAll('.VPNavBarTitle a.title')
        logoLinks.forEach((link) => {
          link.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.href = '/'
          })
        })
      }, 100)
    }
  }
}
