<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const redirectToLogin = () => {
  router.push('/login')
}

redirectToLogin()
</script>
