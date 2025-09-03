import FullWidthWrapper from '@/components/full-width-wrapper';
import Typography from '@/components/typography';
import YogaDi from '@/components/yoga-di';
import YogaMi from '@/components/yoga-mi';

export default function Yoga() {
  return (
    <section className="space-y-7 xl:pt-25">
      <FullWidthWrapper>
        <Typography className="m-5 mx-auto" variant="h1">
          Yoga
        </Typography>
      </FullWidthWrapper>
      <section className="flex flex-col gap-8">
        <div className="h-1/2 w-full">
          <YogaDi />
        </div>
        <div className="h-1/2 w-full">
          <YogaMi />
        </div>
      </section>
    </section>
  );
}
