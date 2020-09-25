//Java Solution

class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int[] charArr = new int[26];
        
        for (int i = 0; i < p.length(); i++) {
            charArr[p.charAt(i) - 'a']++;
        }
        
        List<Integer> result = new ArrayList<>();
        int left = 0;
        int right = p.length();
        
        while (right <= s.length()) {
            String substring = s.substring(left, right++);
            int[] charArr2 = new int[26];
            
            for (int i = 0; i < substring.length(); i++) {
                charArr2[substring.charAt(i) - 'a']++;
            }
            
            if (Arrays.equals(charArr, charArr2)) {
                result.add(left);
            }
            
            left++;
        }
        
        return result;
    }
}