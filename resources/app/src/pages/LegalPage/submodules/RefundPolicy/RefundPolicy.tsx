import { SUPPORT_EMAIL } from "constants/common";

export const RefundPolicy = () => {
  return (
    <div>
      <h1>
        Refund Policy
      </h1>
      <p>
        Effective as of: Nov 22, 2022 
      </p>
      <br />
      <p>
        The Fitmealie Training Plan is delivered entirely as a digital product with no recoverability once it is delivered. The Meal Plan (hereinafter – the “Product”) and ANY other similarly delivered digital programs are not included and no returns are accepted.
      </p>
      <p>
        Please note that the Meal Plan is a digital product ONLY and cannot be recovered once it is delivered, however, in certain exceptional cases, we may provide you with a refund for Meal Plan that ONLY can be granted IF within 3 (three) hours of the initial purchase AND the documentation for workouts (the Product itself) have NOT been downloaded. All requests for shall be submitted in writing to the following email address: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. The refunds are solely available on our own discretion. You will usually hear our decision about the during first 5 (five) business days after the refund request submission. Please note that in case of the affirmative decision from our side the return of the funds to your account may take some time due to banking transactions. The refund can only be done once for the same Meal Plan A second refund will NOT be issued if a customer purchases a program that they have received a refund on once before. For example, a customer purchases a Meal Plan in March and receives a refund. They then decide to purchase a Meal Plan a second time in August and request a refund, one will not be issued. it is assumed that you know all about the program that you once owned and returned. This applies to ALL products.
      </p>
      <p>
        In the event that a customer’s request for a program exchange is granted, the customer will no longer be eligible for a refund on either program, nor will the customer be eligible to request another program exchange in regards to that purchase. All requests for refunds and exchanges must be made within the appropriate time frame for that program.
      </p>
      <p>
        Your programs are delivered entirely online. They are web based. No Physical product will be sent in the mail. It is not an app. We may disseminate the information as we see fit. For that reason we have implemented the Accountability Feature. Starting with the program Breakout and each program from that point forward that has been released will include this feature.
      </p>
    </div>
  );
};
