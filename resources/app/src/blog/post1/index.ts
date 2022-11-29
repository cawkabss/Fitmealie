import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import preview from './images/preview.png';
import hero from './images/hero.jpg';
import contentImg1 from './images/content-1.jpg';
import contentImg2 from './images/content-2.jpg';

export const POST: BlogPost = {
  title: 'How Much Water Should You Drink Per Day?',
  description: 'We all know that about 60% of the human body consists of water. No wonder then that water is essential to our livelihood. Every organ in our bodies needs water ...',
  date: 'November 2, 2022',
  preview,
  hero,
  content: [
    {
      type: BlogPostContent.Image,
      src: contentImg1,
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'We all know that about 60% of the human body consists of water. No wonder then that water is essential to our livelihood. Every organ in our bodies needs water to function correctly. Therefore, it is vital to maintain the water balance so that our organisms work flawlessly.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Our bodies lose water all the time. When we sweat, cry, urinate, and even breathe. Therefore, we should always balance it out by drinking fluids. Yes, that’s right, we can up our hydration level by drinking all kinds of liquids, not just water. However, this does not negate the health benefits of drinking clear water as opposed to beverages with sugar, caffeine, or alcohol.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'There is a big debate about how much water you should consume per day. Some claim it’s 2 liters, or 8 cups per day for everyone, while others set different benchmarks for men and women separately. The simple truth is it’s all individual. In fact, any kind of definite answer would be inaccurate for someone. Water intake is dependent on so many factors that it is impossible to find the right amount for everyone. Such factors can be age, sex, health, environment, or even what you are doing at the moment.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'However, there is no reason to worry. You don’t need to count every glass of water you drink because your body will take care of that for you. The human body is designed to survive, and it has been doing just that during the entire existence of humankind. Just think about your leukocytes fighting off viruses so that you don’t get a flu, or your sense of smell indicating that the food has gone bad so that you don’t eat it. It is the same with hydration — your body will signal you when it’s time to drink some water by making you feel thirsty. Yes, it’s as simple as that!',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Some might say that feeling thirsty is already an indicator of dehydration and that it’s bad for your health. The answer would be yes and no. Dehydration denotes that your body is losing more water than it gets. Thirst indeed tells you that your body hasn’t been given the needed water for some time, but it is not detrimental like dehydration is, and can be easily fixed with a glass of water.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'You should drink as much water as you want when you want it. But what to do if you fail to catch those signals your body is sending you? You are not alone! There is a tendency for a sense of thirst to weaken over the years, exposing adults and the elderly to higher risks of dehydration. In that case, look out for more evident symptoms of water deficiency:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Dark or strong-smelling urine: with normal fluid intake, your pee is supposed to be almost transparent or light-yellow and not have a distinctive smell.',
        'Headache: don’t worry; you can get rid of it shortly just by drinking a glass of water.',
        'Fatigue or dizziness: naturally low levels of energy, because your body is wasting it on trying to function without water.',
        'Dry skin and mouth.',
        'Weight gain: you might end up eating more than you would because you misread your thirst as hunger.',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'It is a bad idea to drink a large amount of water in one sitting after neglecting your hydration for a long time. If you do that, you’ll most likely urinate it very fast and won’t get all the healthy elements water provides anyway. You should spread your water intake evenly so that your body is hydrated throughout the day. Remember: too much is as bad as not enough.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'If you need some encouragement to drink water, check out these amazing things water does for you:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Washes out the toxins from your body.',
        'Lubricates your joints',
        'Provides electrolytes, such as sodium, potassium, and calcium, that control blood pressure and pH levels, transport signals from nerves to muscles, and manage the nervous system.',
        'Delivers nutrients to bodily organs',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'All in all, water is an excellent source of energy and provides numerous health benefits. Dehydration, on the other hand, is a severe issue that can cause grave health problems and even death if not treated immediately. To avoid that, drink water regularly, monitor your body signals, and act on them as soon as they occur.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Quick tips for always keeping hydrated:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Get a habit of having a drink with your meals.',
        'Cut down on sugary beverages, alcohol, and coffee.',
        'Carry a reusable water bottle so that you have water with you at all times, especially during summertime. Google the places where you can refill your bottle when spending a lot of time outside.',
        'Keep a glass of water on your nightstand.',
        'Make lemonades if you dislike plain water, but be sure not to add sugar.',
        'When sick, drink hot lemon water with honey and ginger — it is both hydrating and vitamin-boosting!',
      ],
    },
    {
      type: BlogPostContent.Image,
      src: contentImg2,
    },
  ],
};
