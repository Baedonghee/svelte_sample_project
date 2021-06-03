<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subTitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we will have some exports that teach',
      imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg',
      address: '27th Nerd Road, 4 32533 New York',
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subTitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we will have some exports that teach',
      imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg',
      address: '27th Nerd Road, 4 32533 New York',
      contactEmail: 'code@test.com'
    }
  ]

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subTitle: subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email
    };

    meetups = [newMeetup, ...meetups]
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title" 
      label="Title" 
      type="text"
      value={title} 
      on:input={(event) => title = event.target.value} />
    <TextInput
      id="subtitle" 
      label="Subtitle" 
      type="text"
      value={subtitle} 
      on:input={(event) => subtitle = event.target.value}  />
    <TextInput
      id="address" 
      label="Address" 
      type="text"
      value={address} 
      on:input={(event) => address = event.target.value}  />
    <TextInput
      id="imageUrl" 
      label="Image Url" 
      type="text"
      value={imageUrl} 
      on:input={(event) => imageUrl = event.target.value}  />
    <TextInput
      id="email" 
      label="E-Mail" 
      type="email"
      value={email} 
      on:input={(event) => email = event.target.value}  />
    <TextInput
      id="description" 
      label="Description" 
      type="text"
      value={description} 
      controlType="textarea"
      on:input={(event) => description = event.target.value}  />
    <Button type="submit" caption="Save"/>
  </form>
  <MeetupGrid {meetups} />
</main>
