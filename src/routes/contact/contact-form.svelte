<script lang="ts">
 import * as Form from "lib/components/ui/form";
 import { Input } from "lib/components/ui/input";
 import { formSchema, type FormSchema } from "./schema";
 import { Textarea } from "lib/components/ui/textarea";
 import {
  type SuperValidated,
  type Infer,
  superForm,
 } from "sveltekit-superforms";
 import { zodClient } from "sveltekit-superforms/adapters";
 
 export let data: SuperValidated<Infer<FormSchema>>;
 
 const form = superForm(data, {
  validators: zodClient(formSchema),
 });

   const onHCaptchaChange = (token: string) => {
    form.data.set("h-captcha-response", token);
    form.handleSubmit(onSubmit)();
  };

 
 const { form: formData, enhance } = form;

 let isLoadedHCaptcha = false;
</script>
 
<form on:change={() => isLoadedHCaptcha = true} class="w-full text-white gap-8 flex flex-col bg-main-background-300 rounded-md max-w-lg p-10" method="POST" use:enhance>
 <Form.Field {form} name="Name">
  <Form.Control let:attrs>
   <Form.Label>Name</Form.Label>
   <Input class="bg-main-background-100" {...attrs} bind:value={$formData.name} />
  </Form.Control>
  <Form.FieldErrors />
 </Form.Field>
 <Form.Field {form} name="Email">
  <Form.Control let:attrs>
   <Form.Label>Email</Form.Label>
   <Input type="email" class="bg-main-background-100" {...attrs} bind:value={$formData.email} />
  </Form.Control>
  <Form.FieldErrors />
 </Form.Field>
  <Form.Field {form} name="Message">
  <Form.Control let:attrs>
   <Form.Label>Message</Form.Label>
   <Textarea class="bg-main-background-100" bind:value={$formData.message} {...attrs} />
  </Form.Control>
  <Form.FieldErrors />
 </Form.Field>
  <Form.Field {form} name="PrivacyPolicy">
  <Form.Control let:attrs >
    <div class="flex justify-start items-center gap-4">
      <Form.Label>
        <a 
      href="https://www.privacypolicies.com/live/2470fb14-022a-4f19-a2e0-2893fa1693fd"
          > Privacy Policy</a></Form.Label>
   <Input type="checkbox" class="bg-main-background-100 w-[20px]" {...attrs} bind:value={$formData.privacyPolicy} />
    </div>
  </Form.Control>
  <Form.FieldErrors />
 </Form.Field>

 <Form.Button class="w-full bg-main-200 hover:bg-main-300">Send message</Form.Button>
 {#if isLoadedHCaptcha}
<div
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? ""}
                languageOverride="cs"
                onVerify={onHCaptchaChange}

  class="h-captcha"
  data-sitekey="your_site_key"
  data-theme="dark"
  data-error-callback="onError"
></div>
  {/if}
</form>
