
export const simplifiedApiResponse = (items = []) => {

  if (!Array.isArray(items)) {
    console.error("Not an array:", items);
    return [];
  }

  // const item = query(item) ;


  return items?.map((item, index) => ({


    id: item?.id ?? item?.title?.id ?? index,

    title: item?.originalTitleText?.text ?? item?.title?.originalTitleText?.text ?? "untitled",

    plot: item?.plot?.plotText?.plainText || item?.title?.plot?.plotText?.plainText,

    ratable: item?.canRateTitle?.isRatable || item?.title?.canRateTitle?.isRatable,

    isAdult: item.isAdult || item.title?.isAdult || "none",

    image: item?.primaryImage?.imageUrl ?? item?.title?.primaryImage?.imageUrl ?? "",

    ranking: item.chartMeterRanking?.currentRank ?? item.title?.chartMeterRanking?.currentRank ?? "0",

    rating: item.ratingsSummary?.aggregateRating ?? item.title?.ratingsSummary?.aggregateRating ?? "--",

    voteCount: item.ratingsSummary?.voteCount || item.title?.ratingsSummary?.voteCount || "--",

    releaseDay: item.releaseDate?.day || item.title?.releaseDate?.day || "",

    releaseMonth: item.releaseDate?.month || item.title?.releaseDate?.month || "",

    releaseYear: item.releaseYear?.year || item.title?.releaseYear?.year || "",

    country: item.releaseDate?.country?.text || item.title?.releaseDate?.country?.text || "IN",

    titleRating: item.titleCertificate?.rating || item.title?.titleCertificate?.rating || "",

    runtime: item.titleRuntime?.seconds || item.title?.titleRuntime?.seconds || "00",

    titleType: item.titleType?.text || item.title?.titleType?.text || "--",

    trailerId: item.latestTrailer?.id || item.title?.latestTrailer?.id || index,

    trailerDescription: item.latestTrailer?.description?.value || item.title?.latestTrailer?.description?.value || "",

    trailerName: item.latestTrailer?.name?.value || item.title?.latestTrailer?.name?.value || "",

    trailerImage: item.latestTrailer?.primaryImage?.imageUrl || item.title?.latestTrailer?.primaryImage?.imageUrl || "",

    trailerRuntime: item.latestTrailer?.runtime?.value || item.title?.latestTrailer?.runtime?.value || "--",

    name: item.nameText?.text || item.title?.nameText?.text || "Someone",

    birthDay: item.birthDateComponents?.dateComponents?.day || item.title?.birthDateComponents?.dateComponents?.day || "0",

    birthMonth: item.birthDateComponents?.dateComponents?.month || item.title?.birthDateComponents?.dateComponents?.month || "0",

    birthYear: item.birthDateComponents?.dateComponents?.year || item.title?.birthDateComponents?.dateComponents?.year || "0",

    birthString: item.birthDateComponents?.displayableProperty?.value?.plainText || item.title?.birthDateComponents?.displayableProperty?.value?.plainText || "0",




  })

  )
}