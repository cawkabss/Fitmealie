import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import preview from './images/preview.png';
import hero from './images/hero.jpg';
import contentImg1 from './images/content-1.jpg';
import contentImg2 from './images/content-2.jpg';

export const POST: BlogPost = {
  title: 'The Right Foods for Exercise',
    description: 'Exercising is an energy-depleting activity. Therefore, you should support your body with a nutritional and balanced diet, especially if you have taken...',
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
        text: 'Exercising is an energy-depleting activity. Therefore, you should support your body with a nutritional and balanced diet, especially if you have taken up the habit of exercising regularly. Moreover, your body needs different kinds of nutrients at different times of the day, which means that some foods are better for breakfast, some for lunch, some are best pre-workout, and some after.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'General dieting tips. Let’s start with easier rules to maintain. Vegetables and fruit are foods that are appropriate for every meal. In fact, you should aim to fill at least half of your plate with them. While eating plain vegetables for the whole day is not all there is to a healthy exercise diet, it is still important to include them.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Pre-workout foods. Having a meal before exercising is vital. Never skip a meal, especially one that precedes a workout because your body needs to stock up on energy to get through the bout of activity without making you dizzy and lightheaded. Moreover, it is very unpleasant to exercise while hungry. On the other hand, beware of eating too close to physical activity, because it may result in nausea and digestive problems. Aim to put 1.5 hours between your meal and exercise.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Oatmeal is great pre-workout food, especially if you usually exercise after breakfast. It is full of fiber and an excellent source of energy. You can add some raisins and honey to it for sweetness. If you prefer savory flavors, add a poached egg and sauteed spinach.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Nuts are wonderful providers of protein, healthy fats, essential minerals, and vitamins. Crush them in your salads, eat them as snacks, or add them to your breakfast oatmeal! There are plenty of options. Bananas are easy to get, tasty, and a fast way to fill up on protein and antioxidants. Fruits and berries are easy to digest, provide necessary hydration, and are superb sources of energy.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'It is also important to know which nutrients to consume before which types of exercises. If you are planning for an intense 30-minute workout on a treadmill or lifting weights, opt for carbohydrates. They provide the necessary muscle fuel called glycogen and are great for short and high-intensity training. You can not possibly go wrong with a banana and almond butter, whole wheat toast, or greek yogurt with berries.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'If you are going to do a moderate or low-intensity workout, like pilates or swimming, choose fats instead. Fats are great for longer-lasting physical activity and will keep you energized the whole time. Your options can be salmon, avocados, nuts, and pumpkin seeds.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Post-workout foods. Post-workout nutrition is as important as pre-workout one. During exercise, your muscles lose some of their protein and the previously mentioned glycogen. So it is vital to restore this balance with a healthy replenishing meal. Here are foods you should focus on and why:',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Foods rich in protein. Protein is needed for the repair and maintenance of your muscles after the training. You can get some yogurt with granola, a smoothie with berries and peanut butter, an omelet with vegetables, a boiled or grilled chicken filet, oily fish, or some cottage cheese with chopped bananas.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Carbohydrates. Carbs will replenish your glycogen. You can have sweet potatoes, wild rice, whole-grain toast, some quinoa, or pasta.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Fats. Not all specialists agree on this one, but a few healthy fats won’t hurt your organism and will not sabotage the benefits of a workout. You can eat avocados, dried berries, nuts, and various seeds.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Make sure not to nosh on too sugary foods at any time. Those include candy, cookies, pastries, or carbonated flavored drinks. They will not help restore your body’s resources and might provoke digestive problems in an exhausted post-workout organism.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Keep in mind that the 30 minutes after the workout form a metabolic window — that is the best time to fill up and restore the resources your body’s lost in the process. However, it isn’t obligatory to eat right after the training — not everybody has the energy and the desire to do that. Just have a little snack in that case.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Don’t forget about the water! Yes, healthy meals are important, but hydration is vital for your organism to function properly. Make sure to carry a bottle of water in your gym bag and sip from it when you need to during the workout. Water does not only provide hydration, but also electrolytes that regulate chemical reactions, muscle contractions, and electrical charges within your body.',
      },
      {
        type: BlogPostContent.Paragraph,
        text: 'Nutrition for exercising may be somewhat arduous and time-consuming, but the results are so worth it! Healthiness, fitness, and a good mood are major advantages, don’t you think?',
      },
      {
        type: BlogPostContent.Image,
        src: contentImg2,
      },
    ],
};
