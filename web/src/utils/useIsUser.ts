import { useMeUserQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIsUser = () => {
  const { data, loading } = useMeUserQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.meUser) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
