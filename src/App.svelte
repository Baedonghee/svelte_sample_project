<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import Button from './UI/Button.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subTitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we will have some exports that teach',
      imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg',
      address: '27th Nerd Road, 4 32533 New York',
      contactEmail: 'code@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subTitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we will have some exports that teach',
      imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg',
      address: '27th Nerd Road, 4 32533 New York',
      contactEmail: 'code@test.com',
      isFavorite: false
    }
  ]

  let editMode;

  function addMeetup(event) {
    const { title, subtitle, description, imageUrl, address, email } = event.detail;
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subTitle: subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email
    };

    meetups = [newMeetup, ...meetups];
    editMode = false;
  }

  function cancelEdit() {
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => editMode = 'add'}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid {meetups} on:tooglefavorite={toggleFavorite} />
</main>
