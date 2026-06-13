import { ProfileLayout } from "@/components/profile/profile-layout";
import {
  ownProfile,
  latestRelease,
  singles,
  ownPublicacoes,
  ownRemixes,
} from "@/lib/profile-mocks";

export function MyProfile() {
  return (
    <ProfileLayout
      profile={ownProfile}
      headerVariant="own"
      latestRelease={{ ...latestRelease, artist: ownProfile.name.split(" ")[0] }}
      singles={singles}
      publicacoes={ownPublicacoes}
      remixes={ownRemixes}
    />
  );
}
