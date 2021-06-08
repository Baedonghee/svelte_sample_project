<script>
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';
  import { isEmpty, isValidEmail } from '../helpers/validation';

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: addressValid = !isEmpty(address);
  $: descriptionValid = !isEmpty(description);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: emailValid = isValidEmail(email);
  $: formIsValid = titleValid && subtitleValid && addressValid && descriptionValid && imageUrlValid && emailValid;

  function submitForm() {
    dispatch('save', {
      title,
      subtitle,
      address,
      email,
      description,
      imageUrl,
    });
  }

  function cancel() {
    dispatch('cancel');
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title" 
      label="Title" 
      valid={titleValid}
      validityMessage="Please enter a valid title."
      value={title} 
      on:input={(event) => title = event.target.value} />
    <TextInput
      id="subtitle" 
      label="Subtitle" 
      valid={subtitleValid}
      validityMessage="Please enter a valid subtitle."
      value={subtitle} 
      on:input={(event) => subtitle = event.target.value}  />
    <TextInput
      id="address" 
      label="Address" 
      valid={addressValid}
      validityMessage="Please enter a valid address."
      value={address} 
      on:input={(event) => address = event.target.value}  />
    <TextInput
      id="imageUrl" 
      label="Image Url" 
      valid={imageUrlValid}
      validityMessage="Please enter a valid imageUrl."
      value={imageUrl} 
      on:input={(event) => imageUrl = event.target.value}  />
    <TextInput
      id="email" 
      label="E-Mail" 
      type="email"
      valid={emailValid}
      validityMessage="Please enter a valid email."
      value={email} 
      on:input={(event) => email = event.target.value}  />
    <TextInput
      id="description" 
      label="Description" 
      value={description} 
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      controlType="textarea"
      on:input={(event) => description = event.target.value}  />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
  </div>
</Modal>