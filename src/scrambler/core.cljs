(ns scrambler.core
  (:require [reagent.core :as reagent]
            [scrambler.ui :as ui]))

(defn start []
  (reagent/render-component [ui/component]
    (. js/document (getElementById "app"))))

(defn ^:export init [] (start))

(defn stop [] (js/console.log "stop"))
