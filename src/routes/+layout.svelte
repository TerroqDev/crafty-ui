<script>
  import "../app.css";
  import Navigation from "../components/Navigation.svelte";
  import { onMount, setContext } from "svelte";
  import { user } from "./store";
  export let data;
  
  setContext("user", user)
  onMount(async () => {
    if(data){
        const response = await fetch("http://localhost:8000/test", {credentials: "include"});
        data = await response.json()
        if(data){
            // @ts-ignore
            user.set(data.email)
        }else{
            console.log("no data")
        }
    }
  })
</script>

<div class="min-h-screen">
    <Navigation />
    <slot />
</div>
