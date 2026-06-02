
export const simplifiedApiResponse = (items = []) => {

  if (!Array.isArray(items)) {
    console.error("Not an array:", items);
    return [];
  }


  return items?.map((item, index) => ({

    id: item.id || index,

    title: item.originalTitleText?.text || "untitled",

    plot: item.plot?.plotText?.plainText,

    ratable: item.canRateTitle?.isRatable,

    isAdult: item.isAdult || "none",

    image: item.primaryImage?.imageUrl || "",

    ranking: item.chartMeterRanking?.currentRank || "0",

    rating: item.ratingsSummary?.aggregateRating || "--",

    voteCount: item.ratingsSummary?.voteCount || "--",

    releaseDay: item.releaseDate?.day || "",

    releaseMonth: item.releaseDate?.month || "",

    releaseYear: item.releaseYear?.year || "",

    country: item.releaseDate?.country?.text || "IN",

    titleRating: item.titleCertificate?.rating || "",

    runtime: item.titleRuntime?.seconds || "00",

    titleType: item.titleType?.text || "--",

    trailerId: item.latestTrailer?.id || index,

    trailerDescription: item.latestTrailer?.description?.value || "",

    trailerName: item.latestTrailer?.name?.value || "",

    trailerImage: item.latestTrailer?.primaryImage?.imageUrl || "",

    trailerRuntime: item.latestTrailer?.runtime?.value || "--",

    name: item.nameText?.text || "Someone",

    birthDay: item.birthDateComponents?.dateComponents?.day || "0",

    birthMonth: item.birthDateComponents?.dateComponents?.month || "0",

    birthYear: item.birthDateComponents?.dateComponents?.year || "0",

    birthString: item.birthDateComponents?.displayableProperty?.value?.plainText || "0",




  })

  )
}