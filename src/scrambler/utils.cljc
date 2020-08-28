(ns scrambler.utils)

(defn scramble?
  "Takes a string of usable chars and a target string.
   If for any char in the target string,
   it appears more in the target string
   than in the set of usable chars,
   then scamble? returns false."
  [scrabble-hand target]
  (let [target-freq   (frequencies target)
        scrabble-freq (frequencies scrabble-hand)]
    (not-any?
      (fn [[char count]]
        (< (get scrabble-freq char 0) count))
      target-freq)))
