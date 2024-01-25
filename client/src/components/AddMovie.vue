<template>
    <h1 className="uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">
        Saisir un nouveau film
    </h1>
    <form class="max-w-md mx-auto" @submit.prevent="submitForm">
        <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="title"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Titre"
                v-model="title"
                required
            />
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="year"
                v-model="year"
                className="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Année"
                :max='thisYear'

            />
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="director"
                v-model="director"
                className="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Directeur"
            />
        </div>
        <div className="mb-5">
            <label
                htmlFor="multipleOptions"
                className="text-sm font-medium text-gray-300"
            >Genre:</label>
            <select
                id="multipleOptions"
                name="multipleOptions"
                multiple
                className="w-full text-xs mt-1 p-2 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-[#5889c1] ring-offset-gray-800 focus:ring-offset-gray-800"
                @change="handleSelectChange"
                v-model="selectedOptions"
            >
                <option value="Drame">Drame</option>
                <option value="Comédie">Comédie</option>
                <option value="Science-fiction">Science-fiction</option>
                <option value="Horreur">Horreur</option>
                <option value="Action">Action</option>
                <option value="Aventure">Aventure</option>
                <option value="Thriller">Thriller</option>
                <option value="Policier">Policier</option>
                <option value="Fantastique">Fantastique</option>
                <option value="Animation">Animation</option>
                <option value="Famille">Famille</option>
            </select>
        </div>
        <div className="flex items-start mb-5">
            <FavoriteCheckbox
            :isChecked="isFavorite"
            @change="handleFavoriteChange"
            />
        </div>
        <ButtonMain
        type="submit"
        text="Enregistrer"
        @click="submitForm"
        btnStyle="btn-1"
        />
    </form>
</template>

<script>
import ButtonMain from './ButtonMain.vue'
import FavoriteCheckbox from './FavoriteCheckbox.vue'

export default {
  name: 'AddMovie',
  components: {
    ButtonMain,
    FavoriteCheckbox
  }
}

</script>
