'use client';

import Cookies from 'js-cookie';
import { CookieIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Typography from './typography';
import { Button } from './ui/button';
import { Card } from './ui/card';

export default function CookieConsent({
  demo = false,
  onAcceptCallback,
  onDeclineCallback,
}: {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback?.();
  };

  const decline = () => {
    setIsOpen(false);
    Cookies.remove('cookieConsent');
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback?.();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (Cookies.get('cookieConsent') === 'true' && !demo) {
        setIsOpen(false);
        setTimeout(() => {
          setHide(true);
        }, 700);
      }
    } catch {
      // console.log("Error: ", e);
    }
  }, [demo]);

  return (
    <div
      className={cn(
        'fixed right-0 bottom-0 left-0 z-200 w-full transition-transform duration-700 sm:bottom-4 sm:left-4 sm:max-w-md',
        isOpen
          ? 'translate-y-0 opacity-100 transition-[opacity,transform]'
          : 'translate-y-8 opacity-0 transition-[opacity,transform]',
        hide && 'hidden'
      )}
    >
      <Card className=" m-2">
        <div className="grid gap-2">
          <div className="flex h-14 items-center justify-between border-border border-b p-4">
            <h1 className="font-medium text-lg">Wir nutzen Cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <Typography variant="small">
              Diese Website verwendet Cookies, um sicherzustellen, dass Sie die
              bestmögliche Erfahrung auf unserer Website machen.
              <br />
              <Typography className="text-xs" variant="small">
                {' '}
                Durch das Klicken auf "
                <span className="font-medium opacity-80">Akzeptieren</span>",
                stimmen Sie der Verwendung von Cookies zu.
              </Typography>
            </Typography>
          </div>
          <div className="flex gap-2 border-border border-t bg-background/20 p-4 py-5">
            <Button className="flex-1" onClick={accept}>
              Akzeptieren
            </Button>
            <Button className="flex-1" onClick={decline} variant="secondary">
              Ablehnen
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
