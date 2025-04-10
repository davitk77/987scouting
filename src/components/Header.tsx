import { Helmet } from 'react-helmet';
import { useQRScoutState } from '../store/store';

export function Header() {
  const page_title = useQRScoutState(state => state.formData.page_title);
  return (
    <Helmet>
      <title>987Scouting | {page_title}</title>
      <link rel="icon" href="/QRScout/favicon.ico" />
    </Helmet>
  );
}
