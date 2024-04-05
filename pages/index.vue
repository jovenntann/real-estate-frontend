<script setup lang="ts">
import { Loader2, AlertCircle } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()
const email = ref('')
const password = ref('')
const loginFailed = ref(false)

const login = async () => {
  loginFailed.value = false
  isLoading.value = true
  const uri = `https://stg.pickrmusic.com/api/token/`
  const body = {
    username: email.value,
    password: password.value
  }
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  console.log("Response received: ", response);
  isLoading.value = false
  if (!response.ok) {
    loginFailed.value = true
  } else {
    router.push('/dashboard')
  }
}


</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold m-4">
            Welcome Back!
          </h1>
          <p class="text-balance text-muted-foreground">
            Please enter your email to access your account
          </p>
        </div>
        <div class="grid gap-4">
          <div v-if="loginFailed" class="grid gap-2">
            <Alert variant="destructive" class="bg-red-20">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle class="text-sm text-black">We don't recognize that email or password</AlertTitle>
              <AlertDescription class="text-xs text-gray-500">
                Check your credentials and try again.
              </AlertDescription>
            </Alert>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              required
              v-model="email"
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/forgot-password"
                class="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="Password" required v-model="password" />
          </div>
          <Button type="submit" class="w-full" :disabled="isLoading" @click="login">
            <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            <span v-if="!isLoading">Login</span>
            <span v-else></span>
          </Button>
          <Button variant="outline" class="w-full">
            Login with Google
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="dashboard" class="underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="https://www.shadcn-vue.com/placeholder.svg"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>