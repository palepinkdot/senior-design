import { useMeOrgQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIsOrg = () => {
  const { data, loading } = useMeOrgQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.meOrg) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
