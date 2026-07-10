
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


export const simplifiedTitleResponse = (data) => {
  const movie = data?.data?.result;

  if (!movie) return null;

  return {
    // Basic
    id: movie?.id,
    title: movie?.titleText?.text,
    originalTitle: movie?.originalTitleText?.text,
    type: movie?.titleType?.text,
    certificate: movie?.certificate?.rating,
    isAdult: movie?.isAdult,

    // Release
    releaseDate: {
      day: movie?.releaseDate?.day,
      month: movie?.releaseDate?.month,
      year: movie?.releaseDate?.year,
    },
    releaseYear: movie?.releaseYear?.year,

    // Runtime
    runtime: movie?.runtime?.displayableProperty?.value?.plainText,
    runtimeSeconds: movie?.runtime?.seconds,

    // Ratings
    rating: movie?.ratingsSummary?.aggregateRating,
    voteCount: movie?.ratingsSummary?.voteCount,
    metascore: movie?.metacritic?.metascore?.score,

    // Meter Ranking
    meterRanking: {
      rank: movie?.meterRanking?.currentRank,
      change: movie?.meterRanking?.rankChange?.difference,
      direction: movie?.meterRanking?.rankChange?.changeDirection,
    },

    // Images
    poster: movie?.primaryImage?.url,
    posterCaption: movie?.primaryImage?.caption?.plainText,
    totalImages: movie?.images?.total,

    // Plot
    plot: movie?.plot?.plotText?.plainText,

    // Production
    productionStatus:
      movie?.productionStatus?.currentProductionStage?.text,

    productionCompany:
      movie?.production?.edges?.map(
        company => company?.node?.company?.companyText?.text
      ) || [],

    // Genres
    genres:
      movie?.genres?.genres?.map(genre => genre?.text) || [],

    // Keywords
    keywords:
      movie?.keywords?.edges?.map(
        keyword => keyword?.node?.text
      ) || [],

    // Interests
    interests:
      movie?.interests?.edges?.map(
        interest => interest?.node?.primaryText?.text
      ) || [],

    // Directors
    directors:
      movie?.directorsPageTitle?.flatMap(section =>
        section?.credits?.map(
          director => ({
            id: director?.name?.id,
            name: director?.name?.nameText?.text,
          })
        )
      ) || [],

    // Writers
    writers:
      movie?.principalCredits
        ?.find(item => item?.category?.id === "writer")
        ?.credits?.map(writer => ({
          id: writer?.name?.id,
          name: writer?.name?.nameText?.text,
        })) || [],

    // Cast
    cast:
      movie?.castPageTitle?.edges?.map(actor => ({
        id: actor?.node?.name?.id,
        name: actor?.node?.name?.nameText?.text,
      })) || [],

    // Videos
    trailers:
      movie?.primaryVideos?.edges?.map(video => ({
        id: video?.node?.id,
        title: video?.node?.name?.value,
        description: video?.node?.description?.value,
        thumbnail: video?.node?.thumbnail?.url,
        runtime: video?.node?.runtime?.value,
        preview:
          video?.node?.previewURLs?.[0]?.url,
        video:
          video?.node?.playbackURLs?.[0]?.url,
      })) || [],

    // Country
    countries:
      movie?.countriesOfOrigin?.countries?.map(
        country => country?.id
      ) || [],

    // Statistics
    reviews: movie?.reviews?.total,
    criticReviews: movie?.criticReviewsTotal?.total,
    trivia: movie?.triviaTotal?.total,
    watchlist:
      movie?.engagementStatistics?.watchlistStatistics?.displayableCount?.text,

    // Featured Review
    featuredReview: movie?.featuredReviews?.edges?.[0]
      ? {
          author:
            movie.featuredReviews.edges[0].node.author.nickName,
          rating:
            movie.featuredReviews.edges[0].node.authorRating,
          summary:
            movie.featuredReviews.edges[0].node.summary.originalText,
          review:
            movie.featuredReviews.edges[0].node.text.originalText
              .plainText,
          date:
            movie.featuredReviews.edges[0].node.submissionDate,
        }
      : null,
  };
};



export const simplifiedPersonResponse = (data) => {
  const person = data?.data?.result;

  if (!person) return null;

  return {
    // Basic
    id: person?.id,
    name: person?.nameText?.text,
    disambiguator: person?.disambiguator?.text,

    // Image
    image: person?.primaryImage?.url,
    imageCaption: person?.primaryImage?.caption?.plainText,
    totalImages: person?.images?.total,

    // Biography
    bio: person?.bio?.text?.plainText,

    // Birth & Death
    birthDate: person?.birthDate?.displayableProperty?.value?.plainText,
    birth: {
      day: person?.birthDate?.dateComponents?.day,
      month: person?.birthDate?.dateComponents?.month,
      year: person?.birthDate?.dateComponents?.year,
    },

    deathStatus: person?.deathStatus,
    deathDate: person?.deathDate
      ? person?.deathDate?.displayableProperty?.value?.plainText
      : null,

    // Professions
    professions:
      person?.primaryProfessions?.map(
        profession => profession?.category?.text
      ) || [],

    // Known For
    knownFor:
      person?.knownFor?.edges?.map(item => ({
        title: item?.node?.title?.titleText?.text,
        category: item?.node?.summary?.principalCategory?.text,
      })) || [],

    // IMDb Ranking
    meterRanking: {
      rank: person?.meterRanking?.currentRank,
      change: person?.meterRanking?.rankChange?.difference,
      direction: person?.meterRanking?.rankChange?.changeDirection,
    },

    // Statistics
    totalVideos: person?.videos?.total,
    triviaCount: person?.subNavTrivia?.total,
    awardNominations: person?.subNavAwardNominations?.total,
    faqs: person?.subNavFaqs?.total,

    // Featured Videos
    videos:
      person?.primaryVideos?.edges?.map(video => ({
        id: video?.node?.id,
        title: video?.node?.name?.value,
        description: video?.node?.description?.value,
        runtime: video?.node?.runtime?.value,
        thumbnail: video?.node?.thumbnail?.url,

        relatedTitle: {
          id: video?.node?.primaryTitle?.id,
          title: video?.node?.primaryTitle?.titleText?.text,
          year: video?.node?.primaryTitle?.releaseYear?.year,
        },

        preview:
          video?.node?.previewURLs?.[0]?.url,

        video:
          video?.node?.playbackURLs?.[0]?.url,
      })) || [],
  };
};