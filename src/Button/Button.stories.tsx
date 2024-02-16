import { Button } from '@/components/ui/button';
import { CircleUserRound, LogOutIcon } from 'lucide-react';
import '../../globals.css';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {},
};

export const MymButtons = () => {
  return (
    <div className='flex flex-col max-w-xs gap-2'>
      <Button variant={'mym-primary'}>Inscription</Button>
      <Button variant={'mym-primary'}>
        <LogOutIcon className={'w-4 h-4 mr-2'} />
        Se deconnecter
      </Button>
      <Button variant={'mym-secondary'}>Connexion</Button>
      <Button variant={'mym-outline'}>
        <CircleUserRound className={'w-5 h-5 mr-3'} />
        Avec mon email
      </Button>
    </div>
  );
};
