import { ProfileLayout } from "@/components/profile/profile-layout";
import { friendProfile, latestRelease, singles } from "@/lib/profile-mocks";

export function FriendProfile() {
  return (
    <ProfileLayout
      profile={friendProfile}
      headerVariant="friend"
      latestRelease={latestRelease}
      singles={singles}
    />
  );
}
