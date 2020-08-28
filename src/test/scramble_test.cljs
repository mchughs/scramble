(ns test.scramble-test
  (:require [cljs.test :refer (deftest is)]
            [scrambler.utils :as utils]))

(deftest scramble-test
  (is (utils/scramble? "rekqodlw" "world"))
  (is (utils/scramble? "cedewaraaossoqqyt" "codewars"))
  (is (utils/scramble? "" ""))
  (is (utils/scramble? "foobar" ""))
  
  (is (not (utils/scramble? "katas" "steak")))
  (is (not (utils/scramble? "" "foobar"))))
