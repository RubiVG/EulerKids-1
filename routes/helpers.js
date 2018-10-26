module.exports = {
  questionsRatingFilter(rating, questions) {
    if (rating < 800) {
      return questions.filter(a => a.rating === 800);
    }
    if (rating >= 800 && rating <= 1049) {
      return questions.filter(a => a.rating === 1200);
    }
    if (rating >= 1050) {
      return questions.filter(a => a.rating >= 1800);
    }
  },
  ratingMaster(rating, ratingDefault) {
    return !isNaN(parseFloat(rating)) && isFinite(rating)
      ? rating
      : ratingDefault;
  },
  dailyPractice(dailyPractice, _) {
    if (dailyPractice.length === 0) {
      return [];
    }

    let dic = {};
    let obj = null;
    for (var i = 0; i < dailyPractice.length; i++) {
      obj = {
        date: dailyPractice[i].date,
        time: _.get(dailyPractice[i], `time`, 0),
        total: _.get(dailyPractice[i], `total`, 0)
      };

      if (!dic[obj.date]) {
        dic[obj.date] = obj;
      } else {
        dic[obj.date].time += obj.time;
        dic[obj.date].total += obj.total;
      }
    }

    let dataProviderEjer = [];

    for (const prop in dic) {
      dataProviderEjer.push(dic[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.date).getTime();
      b = new Date(b.date).getTime();
      return a - b;
    });

    let finalData = [];

    // for (i = 0; i < dataProviderEjer.length; i++) {
    //   finalData.push({
    //     date: dataProviderEjer[i].date,
    //     ejercicios: dataProviderEjer[i].total,
    //     time: dataProviderEjer[i].time,
    //   });
    // }
    //
    // return finalData;

    return dataProviderEjer;
  },
  shuffleFisher(array) {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
};
