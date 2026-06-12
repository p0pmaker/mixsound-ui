import { ProfileLayout } from "@/components/profile/profile-layout";
import { ownProfile, latestRelease, singles } from "@/lib/profile-mocks";

export function MyProfile() {
  return (
    <ProfileLayout
      profile={ownProfile}
      headerVariant="own"
      latestRelease={{ ...latestRelease, artist: ownProfile.name.split(" ")[0] }}
      singles={singles}
    />
  );
}
