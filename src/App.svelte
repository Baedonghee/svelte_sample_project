<script>
import { listen } from 'svelte/internal';

  import Header from './UI/Header.svelte';

  const meetups = [
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
</script>

<Header />
