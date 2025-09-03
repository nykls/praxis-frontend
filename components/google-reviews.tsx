import { InfiniteSlider } from '@/components/animate/infinite-slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Simplified type for a Google Review
interface GoogleReview {
  id: number;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
  };
  starRating:
    | 'STAR_RATING_UNSPECIFIED'
    | 'ONE'
    | 'TWO'
    | 'THREE'
    | 'FOUR'
    | 'FIVE';
  comment: string;
}

// Mock data, as we don't have API credentials yet
const mockReviews: GoogleReview[] = [
  {
    id: 1,
    reviewer: {
      displayName: 'Max Mustermann',
      profilePhotoUrl: '',
    },
    starRating: 'FIVE',
    comment:
      'Ich bin seit Jahren bei Frau Lurtz in Behandlung und kann sie nur wärmstens empfehlen. Sie ist eine sehr kompetente und einfühlsame Osteopathin, die sich immer viel Zeit für ihre Patienten nimmt.',
  },
  {
    id: 2,
    reviewer: {
      displayName: 'Erika Mustermann',
      profilePhotoUrl: '',
    },
    starRating: 'FIVE',
    comment:
      'Eine absolute Empfehlung! Nach nur wenigen Behandlungen waren meine chronischen Rückenschmerzen deutlich besser. Super freundlich und professionell.',
  },
  {
    id: 3,
    reviewer: {
      displayName: 'Peter Schmidt',
      profilePhotoUrl: '',
    },
    starRating: 'FIVE',
    comment:
      'Top Behandlung! Sehr professionell und freundlich. Fühle mich wie neugeboren. Danke!',
  },
  {
    id: 4,
    reviewer: {
      displayName: 'Anna Meier',
      profilePhotoUrl: '',
    },
    starRating: 'FIVE',
    comment:
      'Die beste Osteopathin, die ich je hatte. Nimmt sich Zeit, hört zu und hat mir bei meinen Nackenproblemen sehr geholfen.',
  },
  {
    id: 5,
    reviewer: {
      displayName: 'Klaus Müller',
      profilePhotoUrl: '',
    },
    starRating: 'FIVE',
    comment:
      'Sehr zu empfehlen. Frau Lurtz hat ein unglaubliches Fachwissen und eine sehr angenehme Art. Mir wurde schnell und effektiv geholfen.',
  },
];

const StarIcon = (props: React.SVGProps<SVGSVGElement> & { title: string }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{props.title}</title>
    <path
      clipRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      fillRule="evenodd"
    />
  </svg>
);

const ratingMap = {
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  TWO: 2,
  ONE: 1,
  STAR_RATING_UNSPECIFIED: 0,
};

const ReviewCard = ({ review }: { review: GoogleReview }) => {
  const rating = ratingMap[review.starRating];
  return (
    <Card className="w-[350px] shrink-0 md:w-[450px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              alt={review.reviewer.displayName}
              src={review.reviewer.profilePhotoUrl}
            />
            <AvatarFallback>
              {review.reviewer.displayName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{review.reviewer.displayName}</p>
            <div className="flex items-center">
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  key={`star-filled-${i}`}
                  title="Filled Star"
                />
              ))}
              {Array.from({ length: 5 - rating }).map((_, i) => (
                <StarIcon
                  className="h-5 w-5 text-gray-300"
                  key={`star-empty-${i}`}
                  title="Empty Star"
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm dark:text-gray-400">{`"${review.comment}"`}</p>
      </CardContent>
    </Card>
  );
};

export function GoogleReviews() {
  const reviews = mockReviews;

  return (
    <div className="relative py-12">
      <h2 className="text-center font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl dark:text-white">
        Was meine Patienten sagen
      </h2>
      <p className="mt-4 text-center text-gray-600 text-lg dark:text-gray-400">
        Echte Bewertungen von Google.
      </p>
      <div className="mt-10">
        <InfiniteSlider gap={24} speed={50} speedOnHover={20}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
